import React , {useState} from 'react'
import {getRandomPrompt} from '../utils'
import { preview } from '../assets'
import { useNavigate } from 'react-router-dom'
import {FormField,Loader} from '../components'


const CreatePost = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };
  const handleSubmit=()=>{}
  
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]' >
          Create with Dall-e-2.0
        </h1>
        <p className='mt-2 text-[#666e75] max-w-500px' >
          get through a collection of imaginative images by created by Dall-e-2 and share in the community.
        </p>
      </div>

      <form className='max-w-3xl mx-auto mt-16 ' onSubmit={handleSubmit} >

      <FormField
      labelName="Your Name"
      type="text"
      name="name"
      placeholder="Ex., Saket"
      value={form.name}
      handleChange={handleChange}
    />

    <FormField
      labelName="Prompt"
      type="text"
      name="prompt"
      placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
      value={form.prompt}
      handleChange={handleChange}
      isSurpriseMe
      handleSurpriseMe={handleSurpriseMe}
    />
      </form>
    </section>
  )
}

export default CreatePost