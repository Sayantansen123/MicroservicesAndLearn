import pandas as pd

# Read the Excel file
df = pd.read_excel("file_example_XLS_1000.xls")  # Make sure the file is in the same directory or provide full path

# Display the first 5 rows
print(df.head())