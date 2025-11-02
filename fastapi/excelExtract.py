import pandas as pd

# Read the Excel file
# Make sure the file is in the same directory or provide full path
df = pd.read_excel("file_example_XLS_1000.xls")

# Display the first 5 rows
print(df.head())
