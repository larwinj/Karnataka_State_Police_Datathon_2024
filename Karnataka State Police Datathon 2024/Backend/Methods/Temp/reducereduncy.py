import pandas as pd
df = pd.read_csv(r'C:\Users\LARWIN\Downloads\Copy of FIR_Details_Data.csv')

column_name = 'CrimeGroup_Name'

print(df[column_name])
