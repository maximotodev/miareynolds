export function GET() {
  const albums = [
    {
      id: 1,
      img: "/assets/albums/cover/cover-1.png",
      name: "album 1",
      tracks: [
        {
          name: "Serenade in D Major",
          src: "assets/freedom.mp3",
        },
        {
          name: "Midnight Lullaby",
          src: "assets/freedom.mp3",
        },
        {
          name: "Whispers of the Wind",
          src: "assets/freedom.mp3",
        },
        {
          name: "Dance of the Fireflies",
          src: "assets/freedom.mp3",
        },
        {
          name: "Echoes of the Past",
          src: "assets/freedom.mp3",
        },
        {
          name: "Enchanted Dreams",
          src: "assets/freedom.mp3",
        },
        {
          name: "Sunlight Serenity",
          src: "assets/freedom.mp3",
        },
        {
          name: "Misty Moonlight Melody",
          src: "assets/freedom.mp3",
        },
      ],
    },
    {
      id: 2,
      img: "/assets/albums/cover/cover-2.png",
      name: "album 2",
      tracks: [
        {
          name: "Serenade in D Major",
          src: "assets/freedom.mp3",
        },
        {
          name: "Midnight Lullaby",
          src: "assets/freedom.mp3",
        },
        {
          name: "Whispers of the Wind",
          src: "assets/freedom.mp3",
        },
        {
          name: "Dance of the Fireflies",
          src: "assets/freedom.mp3",
        },
        {
          name: "Echoes of the Past",
          src: "assets/freedom.mp3",
        },
        {
          name: "Enchanted Dreams",
          src: "assets/freedom.mp3",
        },
        {
          name: "Sunlight Serenity",
          src: "assets/freedom.mp3",
        },
        {
          name: "Misty Moonlight Melody",
          src: "assets/freedom.mp3",
        },
      ],
    },
    {
      id: 3,
      img: "/assets/albums/cover/cover-3.png",
      name: "album 3",
      tracks: [
        {
          name: "Serenade in D Major",
          src: "assets/freedom.mp3",
        },
        {
          name: "Midnight Lullaby",
          src: "assets/freedom.mp3",
        },
        {
          name: "Whispers of the Wind",
          src: "assets/freedom.mp3",
        },
        {
          name: "Dance of the Fireflies",
          src: "assets/freedom.mp3",
        },
        {
          name: "Echoes of the Past",
          src: "assets/freedom.mp3",
        },
        {
          name: "Enchanted Dreams",
          src: "assets/freedom.mp3",
        },
        {
          name: "Sunlight Serenity",
          src: "assets/freedom.mp3",
        },
        {
          name: "Misty Moonlight Melody",
          src: "assets/freedom.mp3",
        },
      ],
    },
    {
      id: 4,
      img: "/assets/albums/cover/cover-4.png",
      name: "album 4",
      tracks: [
        {
          name: "Serenade in D Major",
          src: "assets/freedom.mp3",
        },
        {
          name: "Midnight Lullaby",
          src: "assets/freedom.mp3",
        },
        {
          name: "Whispers of the Wind",
          src: "assets/freedom.mp3",
        },
        {
          name: "Dance of the Fireflies",
          src: "assets/freedom.mp3",
        },
        {
          name: "Echoes of the Past",
          src: "assets/freedom.mp3",
        },
        {
          name: "Enchanted Dreams",
          src: "assets/freedom.mp3",
        },
        {
          name: "Sunlight Serenity",
          src: "assets/freedom.mp3",
        },
        {
          name: "Misty Moonlight Melody",
          src: "assets/freedom.mp3",
        },
      ],
    },
    {
      id: 5,
      img: "/assets/albums/cover/cover-5.png",
      name: "album 5",
      tracks: [
        {
          name: "Serenade in D Major",
          src: "assets/freedom.mp3",
        },
        {
          name: "Midnight Lullaby",
          src: "assets/freedom.mp3",
        },
        {
          name: "Whispers of the Wind",
          src: "assets/freedom.mp3",
        },
        {
          name: "Dance of the Fireflies",
          src: "assets/freedom.mp3",
        },
        {
          name: "Echoes of the Past",
          src: "assets/freedom.mp3",
        },
        {
          name: "Enchanted Dreams",
          src: "assets/freedom.mp3",
        },
        {
          name: "Sunlight Serenity",
          src: "assets/freedom.mp3",
        },
        {
          name: "Misty Moonlight Melody",
          src: "assets/freedom.mp3",
        },
      ],
    },
    {
      id: 6,
      img: "/assets/albums/cover/cover-6.png",
      name: "album 6",
      tracks: [
        {
          name: "Serenade in D Major",
          src: "assets/freedom.mp3",
        },
        {
          name: "Midnight Lullaby",
          src: "assets/freedom.mp3",
        },
        {
          name: "Whispers of the Wind",
          src: "assets/freedom.mp3",
        },
        {
          name: "Dance of the Fireflies",
          src: "assets/freedom.mp3",
        },
        {
          name: "Echoes of the Past",
          src: "assets/freedom.mp3",
        },
        {
          name: "Enchanted Dreams",
          src: "assets/freedom.mp3",
        },
        {
          name: "Sunlight Serenity",
          src: "assets/freedom.mp3",
        },
        {
          name: "Misty Moonlight Melody",
          src: "assets/freedom.mp3",
        },
      ],
    },
    {
      id: 7,
      img: "/assets/albums/cover/cover-7.png",
      name: "album 7",
      tracks: [
        {
          name: "Serenade in D Major",
          src: "assets/freedom.mp3",
        },
        {
          name: "Midnight Lullaby",
          src: "assets/freedom.mp3",
        },
        {
          name: "Whispers of the Wind",
          src: "assets/freedom.mp3",
        },
        {
          name: "Dance of the Fireflies",
          src: "assets/freedom.mp3",
        },
        {
          name: "Echoes of the Past",
          src: "assets/freedom.mp3",
        },
        {
          name: "Enchanted Dreams",
          src: "assets/freedom.mp3",
        },
        {
          name: "Sunlight Serenity",
          src: "assets/freedom.mp3",
        },
        {
          name: "Misty Moonlight Melody",
          src: "assets/freedom.mp3",
        },
      ],
    },
  ];

  return Response.json(albums);
}
