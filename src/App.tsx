import { useEffect, useState } from "react"
import Layout from "./Layout"
import Home from "./components/Home"
import "./index.css"

interface Menu {
  id: number
  url: string
}

function App() {
  const [data, setData] = useState<Menu[]>([])
  const getMenus = async () => {
    try {
      const response = await fetch("http://localhost:3000/menus")
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`)
      }
      return response.json()
    } catch (error) {
      console.error("Error fetching data:", error)

      const foodImages = [
        {
          id: 1,
          url: "https://img.freepik.com/free-photo/basil-minced-pork-with-rice-fried-egg_1150-27368.jpg?w=1480&t=st=1698046146~exp=1698046746~hmac=66435ecba7d948e0d96a4d38f2e60f04142652d7dbf2a6690e80605b5d9d5ec4",
        },
        {
          id: 2,
          url: "https://img.freepik.com/free-photo/thai-food-tom-yum-seafood-seafood-spicy-soup_1150-38148.jpg?w=1480&t=st=1698046209~exp=1698046809~hmac=3efb64cbe38b29722d4212246a780022a9f5806892bd885ac5757ac4c5b57f16",
        },
        {
          id: 3,
          url: "https://img.freepik.com/free-photo/pork-green-curry-white-bowl-with-spices-black-cement-background_1150-35196.jpg?w=1480&t=st=1698046224~exp=1698046824~hmac=d25a44a84f05917ccc8354f39ac32045a259cd53f3e4f387fa5edb116467c524",
        },
        {
          id: 4,
          url: "https://img.freepik.com/free-photo/spicy-fried-tubtim-fish-salad-spicy-thai-food_1150-26481.jpg?w=1480&t=st=1698046232~exp=1698046832~hmac=1101b4933ea981fda100c7481c8979795b6ab123750640286712bb5ba674f7f0",
        },
        {
          id: 5,
          url: "https://img.freepik.com/free-photo/close-up-high-protein-soup-meal_23-2149098847.jpg?w=1480&t=st=1698046247~exp=1698046847~hmac=0985b1d32db40264a90f5b06525a96cb2b393c65595550ccfd84b3de5de0ede1",
        },
      ]

      setData(foodImages)

      return null // Or handle the error as needed
    }
  }

  useEffect(() => {
    getMenus().then((res) => {
      setData(res.data)
    })
  }, [])
  return (
    <>
      <Layout>
        <Home images={data} />
      </Layout>
    </>
  )
}

export default App
