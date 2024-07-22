
import './App.css';
import cat from './cat.gif'
import moon from './moon.png'
import land from './land.png'
import { useRef } from 'react';
import {Parallax , ParallaxLayer} from '@react-spring/parallax'
function  App(){
  const ref = useRef()
  return (
    <>
<Parallax pages={4} ref = {ref}>
<ParallaxLayer 
offset={0}
speed={1}
factor={2}
style={{
  backgroundSize: 'cover'
}}
>
<img src={moon}></img>


</ParallaxLayer>

<ParallaxLayer
offset={2}
speed={1}
factor={4}
style={{
  backgroundSize: 'cover'
}}

> 
<img src={land}></img>
</ParallaxLayer>
<ParallaxLayer
sticky={{start:0.5 , end: 4.5}}
style={{textAlign:'center'}}
>
<img src={cat} className='cat'></img>

</ParallaxLayer>
<ParallaxLayer
offset={0.2}
speed={0.05}
onClick={()=> ref.current.scrollTo(3)}
>

  <h2>Scroll Down</h2>
</ParallaxLayer>
<ParallaxLayer
offset={3}
speed={2}

onClick={()=>ref.current.scrollTo(0)}
>
 <p>Landed</p>
</ParallaxLayer>
</Parallax>


    </>
  )
}

export default App;
