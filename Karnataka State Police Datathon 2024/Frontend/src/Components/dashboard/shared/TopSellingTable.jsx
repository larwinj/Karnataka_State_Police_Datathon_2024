import { Edit } from "@mui/icons-material";
import {
  Box,
  Card,
  Table,
  Select,
  Avatar,
  styled,
  TableRow,
  useTheme,
  MenuItem,
  TableBody,
  TableCell,
  TableHead,
  IconButton
} from "@mui/material";
// import { Paragraph } from "app/components/Typography";
import { Paragraph } from "../../Typography";

// STYLED COMPONENTS
const CardHeader = styled(Box)(() => ({
  display: "flex",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginBottom: "12px",
  alignItems: "center",
  justifyContent: "space-between"
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "capitalize"
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: "pre",
  "& small": {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"
  },
  "& td": { borderBottom: "none" },
  "& td:first-of-type": { paddingLeft: "16px !important" }
}));

const Small = styled("small")(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: "#fff",
  padding: "2px 8px",
  borderRadius: "4px",
  overflow: "hidden",
  background: bgcolor,
  boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"
}));

export default function TopSellingTable() {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  return (
    <Card elevation={3} sx={{ pt: "20px", mb: 3 }}>
      <CardHeader>
        <Title>Work Assigned</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">This Week</MenuItem>
          <MenuItem value="last_month">Last two day</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell colSpan={4} sx={{ px: 3 }}>
                Name
              </TableCell>

              <TableCell colSpan={2} sx={{ px: 0 }}>
                place
              </TableCell>

              <TableCell colSpan={2} sx={{ px: 0 }}>
              Status
              </TableCell>

              <TableCell colSpan={1} sx={{ px: 0 }}>
                Report
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: "capitalize" }}>
                  <Box display="flex" alignItems="center" gap={4}>
                    <Avatar src={product.imgUrl} />
                    <Paragraph>{product.name}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: "capitalize" }}>
                  {/* ${product.price > 999 ? (product.price / 1000).toFixed(1) + "k" : product.price} */}
                  <Paragraph>{product.price}</Paragraph>
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {/* {product.available ? (
                    product.available < 20 ? (
                      <Small bgcolor={bgSecondary}>{product.available} available</Small>
                    ) : (
                      <Small bgcolor={bgPrimary}>in stock</Small>
                    )
                  ) : (
                    <Small bgcolor={bgError}>out of stock</Small>
                  )} */}
                  <Paragraph>{product.available}</Paragraph>
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton>
                    <Edit color="primary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
}

const productList = [
  {
    imgUrl: "/assets/images/products/headphone-2.jpg",
    name: "Manoj",
    price: "Bengaluru",
    available: "Active"
  },
  {
    imgUrl: "/assets/images/products/headphone-3.jpg",
    name: "Prakash",
    price: "Ballari",
    available: "Inactive"
  },
  {
    imgUrl: "/assets/images/products/iphone-2.jpg",
    name: "Vinay Vk",
    price: "Udupi",
    available: "Active"
  },
  {
    imgUrl: "/assets/images/products/iphone-1.jpg",
    name: "Arun ",
    price: "Belagavi ",
    available: "Inactive"
  },
  {
    imgUrl: "/assets/images/products/headphone-3.jpg",
    name: "Santosh A",
    price: "Bengaluru",
    available: "Active"
  }
];

// *[@id="root"]/div/div[1]/div[2]/header/div/div/a/button