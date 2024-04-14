incident_points = {
    "pocso": 100,
    "theft": 60,
    "vehicle_accident": 50,
    "crpc": 80,
    "missing_person": 90,
    "burglary_night": 30,
    "murder": 110,
    "kidnapping_abduction": 100,
    "riots": 75,
    "cheating": 50,
    "consumer": 60,
    "suicide": 80
}

values = [50, 85, 60, 100, 90]
ids = ['Amengad_PS', 'Badami_PS', 'Bilagi_PS','Kurugod_PS','Indiranagar PS','J.C. Nagar PS','Chittapura PS']

station_point = dict(zip(ids, values))

def update_values(data, police_station):
    if police_station in ids:
        station_point[police_station] += incident_points.get(data, 0)
        return data

update_values("pocso", "Amengad_PS")
print(station_point)
