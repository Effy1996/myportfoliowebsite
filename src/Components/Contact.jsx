import styles from './Contact.module.css';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';


function Contact() {
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const [ formData, setFormData ] = useState("");

    {/*const onSubmit = (formData) => {
        setFormData(formData);
        console.log(formData);
    }*/}

    const onSubmit = async (formData) => {
        setFormData(formData);
        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
            if (response.ok) {
                alert("Email sent successfully!");
            } else {
                alert("Error sending email: " + data.error);
            }
        } catch (error) {
            alert("Something went wrong!");
        }
    };
    

    return (
        <section id="contact" className={styles.contact}>
        <h2>Contact<span> Me</span></h2>
        <div className={styles.contactInfo}>
            <div className={styles.contactDets}>
                <div className={styles.info}> <span><i className="bi bi-telephone-fill"></i>   Calls/Text</span><br />
                +254 706666305
                </div>
                <div className={styles.info}> <span><i className="bi bi-whatsapp"></i>   WhatsApp</span><br />
                +254 773188214
                </div>
                <div className={styles.info}><span><i className="bi bi-envelope-at-fill"></i>   Email</span><br /> 
                effyakinyi07@gmail.com
                </div>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
            <h3>Write to me...</h3>
            
                <div className={styles.first}>
                    <Controller name="fname" control={control} rules={{required: "Please provide your first name!"}} render={({field}) => <Input {...field} placeholder='First Name' 
                        size='lg' 
                        data-skip-inverted-colors="true" 
                        sx={{ border: '2px solid rgb(107, 107, 106)',
                            width: '100%',
                            color: 'rgb(107, 107, 106)',
                            outline: 'none',
                            "--Input-focusedHighlight": "transparent",
                            "--Input-focusedThickness": "3px",
                            "--Input-focused": 0,
                            "&.Mui-focused": {
                                borderColor: "rgb(255, 99, 71)",
                                bgcolor: "rgba(248, 152, 135, 0.3)",
                            },
                            "&:focus-within::before": {
                                borderColor: "rgb(255, 99, 71)",
                    },}}/>}/>
                    {errors.fname && <p role='alert' className={styles.error}>{errors.fname.message}</p>}
                </div>

                <div className={styles.last}>
                    <Controller name="lname" control={control} rules={{required: "Please provide your last name!"}} render={({field}) => <Input {...field} placeholder='Last Name' 
                        size='lg' 
                        data-skip-inverted-colors="true" 
                        sx={{ border: '2px solid rgb(107, 107, 106)',
                            width: '100%',
                            color: 'rgb(107, 107, 106)',
                            outline: 'none',
                            "--Input-focusedHighlight": "transparent",
                            "--Input-focusedThickness": "3px",
                            "--Input-focused": 0,
                            "&.Mui-focused": {
                                borderColor: "rgb(255, 99, 71)",
                                bgcolor: "rgba(248, 152, 135, 0.3)",
                            },
                            "&:focus-within::before": {
                                borderColor: "rgb(255, 99, 71)",
                    },}}/>}/>
                    {errors.lname && <p role='alert' className={styles.error}>{errors.lname.message}</p>}
                </div>

                <div className={styles.number}>
                    <Controller name="phone" control={control} rules={{required: "Please provide your phone number!"}} render={({field}) => <Input {...field} placeholder='Phone Number' 
                        size='lg' 
                        data-skip-inverted-colors="true" 
                        sx={{ border: '2px solid rgb(107, 107, 106)',
                            width: '100%',
                            color: 'rgb(107, 107, 106)',
                            outline: 'none',
                            "--Input-focusedHighlight": "transparent",
                            "--Input-focusedThickness": "3px",
                            "--Input-focused": 0,
                            "&.Mui-focused": {
                                borderColor: "rgb(255, 99, 71)",
                                bgcolor: "rgba(248, 152, 135, 0.3)",
                            },
                            "&:focus-within::before": {
                                borderColor: "rgb(255, 99, 71)",
                    },}}/>}/>
                    {errors.phone && <p role='alert' className={styles.error}>{errors.phone.message}</p>}
                </div>

                <div className={styles.email}>
                    <Controller name="email" control={control} rules={{required: "Please provide a valid Email Address!", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address"}}} 
                    render={({field}) => <Input {...field} placeholder='Email Address' 
                        size='lg' 
                        data-skip-inverted-colors="true" 
                        sx={{ border: '2px solid rgb(107, 107, 106)',
                            width: '100%',
                            color: 'rgb(107, 107, 106)',
                            outline: 'none',
                            "--Input-focusedHighlight": "transparent",
                            "--Input-focusedThickness": "3px",
                            "--Input-focused": 0,
                            "&.Mui-focused": {
                                borderColor: "rgb(255, 99, 71)",
                                bgcolor: "rgba(248, 152, 135, 0.3)",
                            },
                            "&:focus-within::before": {
                                borderColor: "rgb(255, 99, 71)",
                    },}}/>}/>
                    {errors.email && <p role='alert' className={styles.error}>{errors.email.message}</p>}
                </div>

                <div className={styles.message}>
                    <Controller name="message" control={control} rules={{required: "Please write your message!"}} render={({field}) => <Textarea {...field} placeholder='Write your message here...' 
                        size='lg'
                        data-skip-inverted-colors="true" 
                        sx={{ border: '2px solid rgb(107, 107, 106)',
                            width: '100%',
                            height: "250px",
                            resize: "none",
                            color: 'rgb(107, 107, 106)',
                            outline: 'none !important',
                            "--Textarea-focusedHighlight": "transparent",
                            "--Textarea-focusedThickness": "0",
                            "--Textarea-focused": 0,
                            "&.Mui-focused": {
                                borderColor: "rgb(255, 99, 71)",
                                bgcolor: "rgba(248, 152, 135, 0.3)",
                            },
                            "&:focus-within::before": {
                                borderColor: "rgb(255, 99, 71)",
                    },}}/>}/>
                    {errors.message && <p role='alert' className={styles.error}>{errors.message.message}</p>}
                </div>
                {/* <div className={styles.first}>
                <input type="text" className={errors.fname ? "inputError" : ""} placeholder='First Name' {...register("fname", {required: "This is required!"})} aria-invalid={errors.fname ? "true" : "false"} tabIndex={0}/>
                    {errors.fname && <p role='alert' className={styles.error}>{errors.fname.message}</p>}
                </div>
                <div className={styles.last}>
                <input type="text" placeholder='Last Name' {...register("lname", {required: "This is required!"})} aria-invalid={errors.lname ? "true" : "false"} tabIndex={0}/>
                    {errors.lname && <p role='alert' className={styles.error}>{errors.lname.message}</p>}
                </div>
            </div>
            <div className={styles.extraDets}>
                <div className={styles.number}>
                <input type="number" placeholder='Phone Number' {...register("phone", {required: "This is required!"})} aria-invalid={errors.phone ? "true" : "false"} tabIndex={0}/>
                    {errors.phone && <p role='alert' className={styles.error}>{errors.phone.message}</p>}
                </div>
                <div className={styles.email}>
                <input type="email" placeholder='Email Address' {...register("email", {required: "This is required!"})} aria-invalid={errors.email ? "true" : "false"} tabIndex={0}/>
                    {errors.email && <p role='alert' className={styles.error}>{errors.email.message}</p>}
                </div>
            </div>
            <div className={styles.message}>
                <textarea name="message" id="message" {...register("message", {required: "This is required!"})} aria-invalid={errors.message ? "true" : "false"} tabIndex={0}></textarea>
                    {errors.message && <p role='alert' className={styles.error}>{errors.message.message}</p>}
            
            <button type='submit' className={styles.contactBtn}>Send Message</button>*/}
        </form>
        </div>
        </section>
    )
}

export default Contact;
