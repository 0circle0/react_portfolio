import Hash from 'object-hash'

const CreateKey = (value) => {
    return Hash(value);
}

export default CreateKey;