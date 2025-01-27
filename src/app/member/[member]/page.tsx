'use client'
import { animated, useSpring } from '@react-spring/web'
import Header from '@/components/header'
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Button, Carousel, Typography } from '@material-tailwind/react'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import React, { useState, useEffect } from "react";
import { useParams, usePathname, useRouter } from "next/navigation"
import { getMember, Team } from '@/action'
export default function Member() {
    const params = Number(useParams().member);
    const [member, setMember] = useState<Team>()
    React.useEffect(() => {
        (async () => {
            const memberResponce = await getMember(params);

            if (memberResponce != null) {
                // const teamFormat = teamResponce.map(elem => elem.contacts = JSON.parse(elem.contacts));
                setMember(memberResponce)
            }
        })();
    }, []);
    console.log(member)
    // const currentMember = find((item))
    return (
        <div className="bg-gray-900">
            <Header />
            <section className="container py-20 mt-20 h-screen mx-auto">
                <div className='flex justify-between'>
                    <Fade className='w-5/12' duration={0.4}>
                        <img src={member?.avatar} className='w-10/12 rounded-lg' alt="" />
                    </Fade>
                    <Fade className='w-5/12' duration={0.4}>

                    </Fade>
                </div>

            </section>

        </div>


    )
}