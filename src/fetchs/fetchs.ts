<<<<<<< HEAD
const backendUrl = 'http://localhost:3000'
=======
export const backendUrl = 'https://alayah-fumaric-westin.ngrok-free.dev'
>>>>>>> 1722214bd77e23f5f035d9078bbdaf47172c88c9

export async function fetchDataSensors (sensorType: string) {
    const res = await fetch(`${backendUrl}/get-data`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sensorType })
    }) 

    const data = await res.json()
    return data.res
}

export async function fetchPreds (sensorType: string) {
    const res = await fetch(`${backendUrl}/get-pred`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sensorType })
    }) 

    const data = await res.json()

    return data.res
}

export async function fetchProms () {
    const res = await fetch(`${backendUrl}/get-proms`, {
        headers: {
            'ngrok-skip-browser-warning': 'true'
        }
    })
    const data = await res.json()

    return data
}