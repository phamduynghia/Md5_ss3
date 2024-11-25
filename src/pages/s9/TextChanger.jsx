import React, { useState } from 'react'
export default function TextChanger() {

    const [text, setText] = useState("đây là nội dung ban đầu");
    const ChangeText = () => {
        setText("nội dung đã thay đổi");
    }

    return (
        <>
            <div>
                <p>{text}</p>
                <button onClick={ChangeText} >thay đổi nội dung</button>
            </div>
        </>
    )

}