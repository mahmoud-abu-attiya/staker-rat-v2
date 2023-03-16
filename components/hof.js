export const handleSubmit = (e) => {
   e.preventDefault();
      const form = new FormData(e.target);
      const data = Object.fromEntries(form.entries());
      console.log(data);
   return data
}