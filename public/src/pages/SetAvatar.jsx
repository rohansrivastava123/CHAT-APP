import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"
import loader from "../Assets/loader.gif"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { SetAvatarRoute } from "../utils/Api"
import { Buffer } from "buffer"
import styles from "./SetAvatar.module.scss"

const SetAvatar = () => {
  const api = "https://api.multiavatar.com/45678945"
  const navigate = useNavigate()
  const [avatars, setavatars] = useState([])
  const [isloading, setavatarisloading] = useState(true)
  const [selectedavatar, setselectedavatar] = useState(0)
  const toastoptions = {
    autoClose: 2000,
    draggable: true,
    position: "top-right",
    theme: "dark",
  }
  useEffect(() => {
    const func = async () => {
      const data = []
      for (let i = 0; i < 4; i++) {
        const image = await axios.get(
          `${api}/${Math.round(Math.random() * 1000)}`
        )
        const buffer = new Buffer(image.data)
        data.push(buffer.toString("base64"))
      }
      setavatars(data)
      setavatarisloading(false)
    }
    func()
  }, [])
  const setprofilepic = async () => {}

  const handleAvatarClick = (idx) => {
    setselectedavatar(idx)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Pick an Avatar as your profile picture</h1>
        </div>
        <div className={styles.avatars}>
          {avatars.map((avatar, idx) => {
            return (
              <div
                key={idx}
                className={`${styles.avatar} ${
                  selectedavatar === idx ? styles.selected : ""
                }`}
              >
                <img
                  alt="avatar"
                  src={`data:image/svg+xml;base64,${avatar}`}
                  onClick={() => {
                    handleAvatarClick(idx)
                  }}
                ></img>
              </div>
            )
          })}
        </div>
      <button className={styles.submitbtn}>Set as Profile picture</button>
      </div>
    </>
  )
}
export default SetAvatar
