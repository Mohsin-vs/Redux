import React, { useState } from 'react'
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { AiFillGoogleSquare } from 'react-icons/ai'
function Footer() {

    return (<>
        <div>

        </div>
        <div className="p-2 bg-dark text-center text-white">
            <a class="btn btn-outline-light btn-floating m-1" href="/" role="button"
            ><BsFacebook /></a>

            <a class="btn btn-outline-light btn-floating m-1" href="/" role="button"
            ><FaTwitterSquare /></a>

            <a class="btn btn-outline-light btn-floating m-1" href="/" role="button"
            ><AiFillGoogleSquare /></a>

            <a class="btn btn-outline-light btn-floating m-1" href="/" role="button"
            ><FaInstagramSquare /></a>

            <a class="btn btn-outline-light btn-floating m-1" href="/" role="button"
            ><FaLinkedin /></a>

            <a class="btn btn-outline-light btn-floating m-1" href="/" role="button"
            ><BsGithub /></a>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2022 Copyright :
            <a className="text-white px-2" href="/"><b>movies.com</b></a>
        </div>

    </>
    )
}

export default Footer