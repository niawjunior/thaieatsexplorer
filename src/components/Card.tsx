const Card = ({ image }: { image: { id: number; url: string } }) => {
  return (
    <div className="flex justify-center rounded-sm">
      <img
        height={300}
        width={300}
        src={image.url}
        alt={image.url}
        className="rounded-lg object-cover hover:scale-105 transition delay-150 duration-300 ease-in-out"
      />
    </div>
  )
}

export default Card
