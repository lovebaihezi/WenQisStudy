import './Box.css'
export default function Box(props) {
    console.log(props);
    const arr=props.arr
  return (
      <div>
          <ul>
            { arr.map((item,index)=>
              <li key={index} className='square'>{item}</li>
              )}
          </ul>
      </div>
  )
}
