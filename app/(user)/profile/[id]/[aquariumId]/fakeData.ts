const createData = (min: number, max: number, len: number) => {
    return Array.from({length: len}, () => Math.floor(Math.random() * (max-min) + min))
}

const labels = ['03.08', '10.08', '17.08', '24.08', '31.08', '07.09', '14.09']

export const data = {
    
    data1: {
      labels: labels,
      datasets: [
        {
          label: 'Temperatura wody',
          data: createData(20, 30, 7),
          borderColor: "rgba(45, 75, 181, 1)",
          backgroundColor: "rgba(83, 111, 212, 0.2)",
          fill: true
        }
      ]
    },
    data2: {
      labels: labels,
      datasets: [
        {
          label: 'Twardość wody',
          data: createData(5, 20, 7),
          borderColor: "rgba(212, 53, 53, 1)",
          backgroundColor: "rgba(219, 92, 92, 0.2)",
          fill: true
        }
      ]
    },
    data3: {
      labels: labels,
      datasets: [
        {
          label: 'Ph wody',
          data: createData(3.5, 8.5, 7),
          borderColor: "rgba(83, 214, 60, 1)",
          backgroundColor: "rgba(119, 219, 101, 0.2)",
          fill: true
        }
      ]
    }
}