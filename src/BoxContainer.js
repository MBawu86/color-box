import React,{ Component } from 'react'
import './BoxContainer.css'
import Box from './Coin'
import { rgbValue, generateColors } from './helper'
  
class BoxContainer extends Component{ 
  
  // Number of color boxes
  static defaultProps = { 
    num : 18 
  } 
  constructor(props){ 
    super(props) 
    this.state = { 
      
    //   array
      colors : generateColors(this.props.num) 
    } 
    this.changeColor = this.changeColor.bind(this) 
  } 
  
  changeColor(c){ 
    
    // Create new random rgb color 
    let newColor 
    do{ 
      newColor = `rgb( 
        ${rgbValue()}, 
        ${rgbValue()}, 
        ${rgbValue()} 
      )` 
        
 
    }while(newColor === c) 
  

    this.setState(st => ({ 
      colors : st.colors.map(color => { 
        if(color !== c) return color 
        return newColor 
      }) 
    })) 
  } 
  
  render(){  
    return( 
      <div className='BoxContainer'> 
        {this.state.colors.map(color => ( 
          
          // For each color make a box component 
          <Box color={color} changeColor={this.changeColor}/> 
        ))} 
      </div> 
    ) 
  } 
} 
  
export default BoxContainer