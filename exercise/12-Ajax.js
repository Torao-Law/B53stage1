const getData = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    
    xhr.open("GET", "https://api.npoint.io/eaad29d9dc174635e5a2")
    
    xhr.onload = () => {
      if(xhr.status === 200) {
        resolve(JSON.parse(xhr.response))
      } else {
        reject("Error loading data")
      }
    }

    xhr.onerror = () => reject("Network Error")

    xhr.send()
  })
} 

const runData = async () => {
  try {
    const response = await getData()
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

runData()