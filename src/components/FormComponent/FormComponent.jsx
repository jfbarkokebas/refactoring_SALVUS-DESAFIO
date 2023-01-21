import './form.css'

const FormComponent = (props) => {
  return (
    <div className="container">

      <form onSubmit={props.handleSubmit}>
        {props.children}
      </form>

    </div>
  )
}

export default FormComponent