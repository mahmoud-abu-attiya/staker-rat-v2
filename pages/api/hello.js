// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const users = [
  {
    id: 1,
    name: 'John Doe',
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quibusdam aut neque assumenda recusandae non cum, nesciunt eaque, quos explicabo nemo iste quae! Nam voluptatum suscipit dolores vel necessitatibus sit?",
    img: "https://img.freepik.com/free-photo/happy-smiling-handsome-man-against-blue-background_93675-135164.jpg?w=740&t=st=1679775016~exp=1679775616~hmac=108b4a4497de0d19da59c788d476e8fcff92f81d50fc43555d0ec2270360dc15",
  },
  {
    id: 2,
    name: 'Mia Doe',
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quibusdam aut neque assumenda recusandae non cum, nesciunt eaque, quos explicabo nemo iste quae! Nam voluptatum suscipit dolores vel necessitatibus sit?",
    img: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?w=740&t=st=1679776687~exp=1679777287~hmac=e08653bfa620458621e0b021515b723ab1ef45f30b33ffc83e63412df791c433",
  },
]