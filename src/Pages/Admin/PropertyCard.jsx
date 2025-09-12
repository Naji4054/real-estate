import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const PropertyCard = ({ singleProperty }) => {
  return (
    <Card sx={{ maxWidth: 1000, mx: 'auto' }}>
      <CardMedia
        sx={{ height: 450, width: 1000 }}
        image={singleProperty.image}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {singleProperty.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {singleProperty.description}
        </Typography>
        <div className='flex justify-between pl-5 pr-5'>
              <div className='flex gap-[10px]'>
                <img src="/images/bed-icon.png" alt="bedroom" className='w-[15px] h-[23px]' />
                <p>{singleProperty.bedroom}</p>
              </div>
              <div className='flex gap-[10px]'>
                <img src="/images/shower-icon.png" alt="washroom" className='w-[15px] h-[19px]'/>
                <p>{singleProperty.washroom}</p>
              </div>
              <div className='flex gap-[8px]' >
                <img src="/images/area-icon.png" alt="area"  className='w-[15px] h-[19px]'/>
                <p>{singleProperty.area} Sq.Ft</p>
              </div>
              <div className='flex'>
                <p className='font-medium'>{singleProperty.category}</p>
              </div>
            </div>
      </CardContent>
      <CardActions>
        <Button size="small">EDIT</Button>
        <Button size="small">DELETE</Button>
      </CardActions>
        </Card>
  )
}

export default PropertyCard
