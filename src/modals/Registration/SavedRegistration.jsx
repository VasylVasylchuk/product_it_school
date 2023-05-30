const savedRegistration = (values) => {
    const data = localStorage.getItem('users');
    if (data) {
        const savedValues = JSON.parse(data);
        savedValues.push(values);
        localStorage.setItem('users', JSON.stringify(savedValues))
    } else {
        localStorage.setItem('users', `[${JSON.stringify(values)}]`)
    }
}

export default savedRegistration;