import { Box, Typography } from '@mui/material'
import React from 'react'
import skillsData from './skillsData'
import SkillItem from './SkillItem'
import Title from '../Title'

const skillsContainer ={
  maxWidth:'xl',
  display:'flex',
  flexDirection:'column',
  margin:'auto',
  padding:7,
  alignItems: 'center'
  
  // padding:'50px '
}
const skillsItemContainer ={
  display:'flex',
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'center',
  

}

export default function Skills() {
  return (
    <Box id='Skills' bgcolor="primary.main">
        <Box sx={skillsContainer}>
        <Title title="MY SKILLS" color="#fff" />
        <Box sx={skillsItemContainer}>
          {skillsData.map((i) => (
            <SkillItem props={i} key={i.name} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
