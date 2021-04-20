const flights = {
    "departureFlights": {
        "total": 1,
        "flights": [
            {
                "id": 194,
                "departureTime": "2020-06-11T22:22:35.000Z",
                "airplaneId": 1,
                "route": {
                    "id": 2,
                    "origin": {
                        "iataId": "PRQ",
                        "name": "Termal Airport",
                        "city": "Presidencia R.s.pena",
                        "country": "Argentina",
                        "timezone": -3,
                        "coords": {
                            "latitude": -60,
                            "longitude": -27,
                            "altitude": 308
                        }
                    },
                    "destination": {
                        "iataId": "JNU",
                        "name": "Juneau International Airport",
                        "city": "Juneau",
                        "country": "United States",
                        "timezone": -9,
                        "coords": {
                            "latitude": -135,
                            "longitude": 58,
                            "altitude": 21
                        }
                    }
                },
                "airplane": {
                    "id": 1
                },
                "seats": {
                    "total": 150,
                    "available": 132,
                    "price": 340.65
                }
            }
        ]
    },
    "returningFlights": {
        "total": 0,
        "flights": []
    }
}
export default flights;