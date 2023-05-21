import React, {useState} from 'react';

function Form() {
    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        age: '',
        postcode: '',
        moment: 'day',
        conditions: false,
        dropdown: '',
        something: '',

    })

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    return (
        <form className='form'>
            <label>
                Voornaam&nbsp;&nbsp;
                <input
                    type='text'
                    name='firstname'
                    value={formState.firstname}
                    onChange={handleChange}
                />
            </label>

            <label>
                Achternaam&nbsp;&nbsp;
                <input
                    type='text'
                    name='lastname'
                    value={formState.lastname}
                    onChange={handleChange}
                />
            </label>
            <label>
                Leeftijd&nbsp;&nbsp;
                <input
                    type='text'
                    name='age'
                    value={formState.age}
                    placeholder='0'
                    onChange={handleChange}
                />
            </label>

            <label>
                Postcode&nbsp;&nbsp;
                <input
                    type='text'
                    name='postcode'
                    value={formState.postcode}
                    onChange={handleChange}
                />
            </label>


            <label>
                Bezorgfrequentie&nbsp;
                <br/>
                <select
                    name='dropdown'>
                    value={formState.dropdown}
                    onChange={handleChange}
                    >
                    <option  value='iedere week'> Iedere week </option>
                    <option  value='iedere maand'> Iedere maand </option>
                </select>

            </label>

            <label>
                Overdag&nbsp;
                <input
                    type='radio'
                    name='moment'
                    value='day'
                    checked={formState.moment === 'day'}
                    onChange={handleChange}
                />
                &nbsp;'s Avonds&nbsp;
                <input
                    type='radio'
                    name='moment'
                    value='night'
                    checked={formState.moment === 'night'}
                    onChange={handleChange}
                />
            </label>

            <label>
                Opmerking&nbsp;
                <br/>
                <textarea
                    rows='10'
                    cols='30'
                    name='something'
                    value={formState.something}
                    onChange={handleChange}
                    />
            </label>
            <label>

                <input
                    type='checkbox'
                    name='conditions'
                    checked={formState.conditions}
                    onChange={handleChange}
                    />
                &nbsp;Ik ga akkoord met de voorwaarden

            </label>

            <button type='submit'>
                Verzend
            </button>
        </form>
    )
}



export default Form;