
const Button = (props) =>{

return(

<button  className='buttonHolder object'>


<img src={props.image  } className='imgCard' alt='' />
<span class="text">{props.text}</span>
</button>

)
}

export default Button;