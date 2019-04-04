import React from 'react';


const Friends = props => {
console.log(props)
        // console.log('string')
        const style = {
            border: '1px solid black',
            width: '60%',
            boxShadow: '5px 5px 5px #D2D2D2',
            margin: '16px auto',
            borderRadius: '3px',
            background: 'gray',
            color: '#FFE135'
        }

        const btnStyle = {
            width: '35%',
            height: '30px',
            margin: '8px auto',
            borderRadius: '6px',
            boxShadow: '1px 1px 1px #D2D2D2'
        }

        return (
            <>
                {props.friends.map(( eachItem, index ) => (
                    <div style={style} key={index}>
                        <h2>{eachItem.name}</h2>
                        <h3>{eachItem.age}</h3>
                        <h4>{eachItem.email}</h4>
                        <button style={btnStyle} onClick={(event) => props.deleteFriend(event, eachItem.id)} >Delete Friend</button>
                    </div>
                ))}
            </>
        )
    }


export default Friends