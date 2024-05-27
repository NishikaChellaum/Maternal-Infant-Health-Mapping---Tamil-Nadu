import os

# HTML code with file locations
html_code = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Map and File Viewer</title>
</head>
<body>
    <div id="right-side">
        <!-- Iframes for all options -->
        <div id="infant_deaths" class="map">
            <iframe src="file:///C:/Users/admin/OneDrive/Documents/MAPATHON/infant_deaths/index.html"></iframe>
        </div>
        <div id="maternal_deaths" class="map">
            <iframe src="file:///C:/Users/admin/OneDrive/Documents/MAPATHON/Maternal_death/index.html"></iframe>
        </div>
        <div id="no_of_phc" class="map">
            <iframe src="file:///C:/Users/admin/OneDrive/Documents/MAPATHON/No_of_PHC/index.html"></iframe>
        </div>
        <!-- More file locations here -->
    </div>
</body>
</html>
"""

# Parse HTML code to extract file locations
file_locations = []
start_index = html_code.find('src="file:///')
while start_index != -1:
    end_index = html_code.find('"', start_index + len('src="file:///'))
    file_location = html_code[start_index + len('src="file:///'):end_index]
    file_locations.append(file_location)
    start_index = html_code.find('src="file:///', end_index)

# Create folders and insert files
for file_location in file_locations:
    folder_path = os.path.dirname(file_location.replace("file:///", ""))
    os.makedirs(folder_path, exist_ok=True)
    file_path = file_location.replace("file:///", "")
    open(file_path, "w").close()  # Create an empty file

print("Folders and files created successfully.")
