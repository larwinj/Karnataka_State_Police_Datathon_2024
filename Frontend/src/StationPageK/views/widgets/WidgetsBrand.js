import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibFacebook, cibLinkedin, cibTwitter, cilCalendar } from '@coreui/icons'
import { CChart } from '@coreui/react-chartjs'

const WidgetsBrand = (props) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                style={{backgroundImage:"URL('https://media.gettyimages.com/id/1314018295/photo/robber-breaking-in-house.jpg?s=612x612&w=gi&k=20&c=riiaRS-N5Zftshp8jp6fvMcnrG5YgfWKEO9Y76dcY4o=')",objectFit:"contain"}}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon  height={125} className="my-4 text-black" />}
          values={[
            { title: '', value: 'Theft' },
            { title: '', value: 'Unsolved' },
          ]}
          style={{}}
          />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100" 
                style={{backgroundImage:"URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5lHE7W-rU1-cKjzT4mR3GHilrvgVJFAy-zQ&usqp=CAU')"}}
                // type="line"
                // data={{
                //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                //   datasets: [
                //     {
                //       backgroundColor: 'rgba(255,255,255,.1)',
                //       borderColor: 'rgba(255,255,255,.55)',
                //       pointHoverBackgroundColor: '#fff',
                //       borderWidth: 2,
                //       data: [1, 13, 9, 17, 34, 41, 38],
                //       fill: true,
                //     },
                //   ],
                // }}
                options={chartOptions}
                />
                ),
              })}
              icon={<CIcon  height={125} className="my-4 text-red" />}
              values={[
                { title: '', value: 'Murder' },
                { title: '', value: 'Unsolved' },
              ]}
                // style={{backgroundImage:"URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5lHE7W-rU1-cKjzT4mR3GHilrvgVJFAy-zQ&usqp=CAU')"
                // backgroundImage:"url('https://www.gettyimages.in/detail/photo/murderer-back-on-the-crime-scene-royalty-free-image/156325442')",
                // '--cui-card-cap-bg': '#00aced'
              // }}
          // icon={cibTwitter}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                style={{backgroundImage:"url('https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg')"}}
              />
            ),
          })}
          icon={<CIcon height={125} className="my-4 text-red" />}
          values={[
            { title: '', value: 'Cyber Crime' },
            { title: '', value: 'Unsolved' },
          ]}
          style={{
            '--cui-card-cap-bg': '#4875b4'
          }}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          color="warning"
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                style ={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTykxysWa1dyrnKHNJmmYg7KVwR92x9JT4ZO7VITxvPYP5fkXk-4lfkwF3i7fbgx7hP9oM&usqp=CAU')"}}
              />
            ),
          })}
          icon={<CIcon icon={cilCalendar} height={125} className="my-4 text-white" />}
          values={[
            { title: '', value: 'Vehicle Theft' },
            { title: '', value: 'Unsolved' },
          ]}
        />
      </CCol>
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsBrand