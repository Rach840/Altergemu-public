'use client'


import { animated, useSpring } from '@react-spring/web'
import Trail from '@/components/trail'
import Header from '@/components/header'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Button, Card, Carousel, Typography } from '@material-tailwind/react'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import { useRef, useState } from 'react'
import { getAllTeam, Team } from '@/action'
import React from 'react'
import Spline from '@splinetool/react-spline'
import Skeleton from '@mui/material/Skeleton'



export default function Home() {

  const [team, setTeam] = useState<Team>()
  const ref = useRef();
  React.useEffect(() => {
    (async () => {
      const teamResponce = await getAllTeam();
      console.log(teamResponce)
      if (teamResponce != null) {
        // const teamFormat = teamResponce.map(elem => elem.contacts = JSON.parse(elem.contacts));
        setTeam(teamResponce)
      }
    })();
  }, []);
  console.log(team);

  const arrow = useSpring({
    config: { duration: 300 },
    to: { top: -10 },
    from: { top: 0 },
    loop: { reverse: true }
  })
  const gradientStyles = useSpring({
    config: { duration: 3000 },
    loop: { reverse: true },
    from: {
      background: `linear-gradient(146deg, rgba(79, 57, 246,1) 0%, rgba(209,209,209,1) 69%)`
    },

    to: {
      background: `linear-gradient(146deg, rgba(209,209,209,1) 0%, rgba(79, 57, 246,1) 69%)`
    }
  });

  return (
    <>
      <Header refer={ref} />

      <Parallax ref={ref} pages={2.7} className="bg-white" >


        <ParallaxLayer speed={0.2} offset={0} className=" mx-auto px-2 pt-14 lg:px-8">
          <animated.div style={{
            ...gradientStyles,
            width: "99.1vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            opacity: 0.48,

          }} />
          <div className="flex justify-between  w-11/12 mx-auto  items-center">
            <div className=" max-w-3xl  py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">

              </div>
              <Trail open={true}>
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                  Команда разработки Altergemu
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-800 sm:text-xl/8">
                  Команда разработчиков проффисионалов, разрабатывающие широкий спектр продуктов начиная от сайтов и игр заканчивая системы контроля версий
                </p>

              </Trail>

            </div>
            <div style={{ height: "650px" }} >
              <Spline
                scene="https://prod.spline.design/m4LY1JZtHyIpXq4g/scene.splinecode"
                width={750}
                height={750}
              />
            </div>

          </div>
          <div className="mt-10 relative -top-16 flex items-center w-full justify-center gap-x-6">
            <animated.div style={{
              ...arrow,
              position: "relative"
            }}>
              <a onClick={() => ref.current.scrollTo(0.5)} className=" uppercase font-semibold text-gray-900">
                <span className='text-6xl font-extrabold' aria-hidden="true">↓</span>
              </a>

            </animated.div>

          </div>
        </ParallaxLayer >

        <ParallaxLayer id='about' offset={0.999999} speed={1} factor={1} className="bg-gray-900 h-full mb-6  py-10">
          <Fade damping={0.2} cascade>
            <div className="container py-16 px-3 lg:px-36  mx-auto">
              <h1 className=' text-4xl text-green-400'>
                Команда Altergemu разрабатывает игры, платформы для тестирования, системы контроля версий и не только. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellat eius natus ab! Voluptatibus nisi labore deserunt quae, corrupti est? Aspernatur omnis quod reprehenderit eligendi.
              </h1>
            </div>
            <div className='relative'>
              <div style={{ width: "94.4%" }} className="absolute top-14  h-full bg-gray-600 -z-10 bottom-0" ></div>
              <div className="flex container mx-auto justify-between items-center">
                <div className="w-6/12 ml-12 ">
                  <h2 className='text-6xl font-bold text-green-400 mb-6'>О команде</h2>
                  <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consectetur fugiat natus quasi officiis nam quia, hic, rem eveniet nobis quis fugit facilis obcaecati eos impedit ipsam accusamus dolorum velit eligendi doloremque? Voluptates, maiores. Blanditiis nostrum harum soluta laudantium similique rerum architecto doloremque, nam accusamus sint. Aliquam explicabo beatae sit.</p>
                </div>
                <img src=".././team.jpg" className='w-6/12  ' alt="" />
              </div>
            </div >


          </Fade>

        </ParallaxLayer>
        <ParallaxLayer id='projects' offset={1} speed={1} factor={1} className='bg-gray-900   pt-20  mb-6  h-2/6  w-11/12   '>
          <h3 className='text-green-400 text-4xl mb-3 font-bold text-center'>Наши Проекты</h3>
          <div className="container mx-auto">
            <Carousel transition={{ type: 'tween', duration: 0.8 }} navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )} className=" rounded-xl">
              <div className="relative p-10 px-14 items-center flex h-full w-full">
                <img
                  src='.././kvf-project.png'
                  alt="image 1"
                  className="rounded-xl w-6/12 object-cover"
                />
                <div className=" w-6/12  inset-0 grid h-full  w-full place-items-center ">
                  <div className="w-11/12 bg-gray-600 p-8 rounded-xl text-center">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-6 text-2xl md:text-3xl lg:text-4xl"
                    >
                      Платформа тестрования КВФ
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 text-left text-xl opacity-80"
                    >
                      Платформа тестирования для Агенства Социальных Инициатив. Платформа уже в релизе и доступна пользователя.
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <Link href='https://24kvf.ru/'>
                        <Button size="lg" variant='gradient' color="black">
                          Перейти на проект
                        </Button>

                      </Link>

                    </div>
                  </div>
                </div>
              </div>
              <div className="relative p-10 px-14 items-center  flex h-full w-full">
                <img
                  src='.././kvf-project.png'
                  alt="image 1"
                  className="rounded-xl w-6/12 object-cover"
                />
                <div className=" w-6/12  inset-0 grid h-full  w-full place-items-center ">
                  <div className="w-11/12 bg-gray-600 p-8 rounded-xl text-center">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-6 text-2xl md:text-3xl lg:text-4xl"
                    >
                      Платформа тестрования КВФ
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 text-left text-xl opacity-80"
                    >
                      Платформа тестирования для Агенства Социальных Инициатив. Платформа уже в релизе и доступна пользователя.
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <Link href='https://24kvf.ru/'>
                        <Button size="lg" variant='gradient' color="black">
                          Перейти на проект
                        </Button>
                        {/* Altergemu Балаяном Рачьёй при поддержке Каплина Николая. */}
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
              <div className="relative p-10 px-14  items-center flex h-full w-full">
                <img
                  src='.././kvf-project.png'
                  alt="image 1"
                  className="rounded-xl w-6/12 object-cover"
                />
                <div className=" w-6/12  inset-0 grid h-full  w-full place-items-center ">
                  <div className="w-11/12 bg-gray-600 p-8 rounded-xl text-center">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-6 text-2xl md:text-3xl lg:text-4xl"
                    >
                      Хоррор игра Сhaos
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 text-left text-xl opacity-80"
                    >
                      Хоррор игра в локациях старого нацисткого бункера, Главный герой решает отправиться на экскурсию в заброшанный нацисткий бункер который окутан загадкими и мрачной историей, по приезду он понимает что это совсем не экскурсия.
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <Link href='https://24kvf.ru/'>
                        <Button size="lg" variant='gradient' color="black">
                          Перейти на проект
                        </Button>

                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>

        </ParallaxLayer>
        <ParallaxLayer id='team' offset={1.9} speed={1} factor={1.5} className=" bg-gray-900  mb-6">
          <h3 className='text-green-400  text-4xl font-bold  text-center'>Участники</h3>
          <div className="container mx-auto grid grid-cols-3 mt-16 mx-4 gap-5">
            <Fade cascade damping={0.2} className='bg-gray-600 pb-4 text-center'  >
              {team != undefined ? team?.map((item) => (
                <div key={item.id} className=" h-full ">
                  <img src={item.avatar} className='w-full mb-3' alt="" />
                  <Typography
                    variant="p"
                    className="text-2xl text-green-400">{item.firstName} {item.lastName}</Typography>
                  <Typography
                    variant="p"

                    className="mb-6 text-gray-400 text-sm  md:text-sm lg:text-lg"
                  >
                    {item.devStatus}
                  </Typography>
                  <Typography
                    variant="p"
                    color="white"
                    className="mb-6 text-sm  md:text-sm lg:text-lg"
                  >
                    {item.bio}
                  </Typography>
                  <Button size="lg" variant='gradient' color="black">
                    <Link href={`/member/${item.id}`}>
                      Посмотреть участника
                    </Link>

                  </Button>
                </div>
              )) : (
                <Card className="text-center h-full bg-gray-600">

                  <Skeleton height={500} width={"80%"} animation="wave" variant="rectangular" />
                  <Skeleton style={{ marginBottom: 6 }} height={100} width={"80%"} animation="wave" variant="rectangular" />
                  <Skeleton style={{ marginBottom: 6 }} height={100} width={"80%"} animation="wave" variant="rectangular" />

                  <Skeleton style={{ marginBottom: 6 }} height={250} width={"40%"} animation="wave" variant="rectangular" />


                </Card>
              )}
            </Fade>
          </div>
        </ParallaxLayer>

      </Parallax >
    </>
  )
}