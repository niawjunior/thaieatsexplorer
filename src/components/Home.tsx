import Card from "./Card"

interface HomeProps {
  images: {
    id: number
    url: string
  }[]
}
const Home = ({ images }: HomeProps) => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-4">
        <section className="mb-8">
          <h1 className="text-3xl font-semibold mb-4">
            Welcome to Thai Eats Explorer
          </h1>
          <p className="text-gray-700">
            Explore the rich and diverse world of Thai cuisine with us. From
            mouthwatering recipes to restaurant recommendations, we've got your
            culinary adventure covered.
          </p>
        </section>

        <section className="mb-4">
          <div className="bg-hero-image h-[300px] bg-cover rounded-md"></div>
        </section>

        <div className="flex flex-wrap justify-center gap-2">
          {images?.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
