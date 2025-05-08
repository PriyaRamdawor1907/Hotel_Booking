import Title from './Title'
import {testimonials} from '../assets/assets'

const Testimonial = () =>{
  return(
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50
    pt-20 pb-30'>
      <Title title='What our guest say ?' 
      subtitle='Discover why discerning travelers consistently choose QuickStay for their
      accomodations around the world.'/>

      <div className='flex flex-wrap gap-12 items-center mt-20'>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} class="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
              <div class="flex flex-col items-center px-5 py-4 relative">
                <img class="h-24 w-24 absolute -top-11 rounded-full" src={testimonial.image} alt={testimonial.name}/>
                <div class="pt-8 text-center">
                  <h1 class="text-lg font-medium text-gray-800">{testimonial.name}</h1>
                  <p class="text-gray-800/80">{testimonial.address}</p>
                </div>
              </div>
              <p class="text-gray-500 px-6 text-center">
              {testimonial.review}
              </p>
            </div>      
          ))}
      </div>
    </div>
  )
}

export default Testimonial