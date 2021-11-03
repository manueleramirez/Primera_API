async function insertar(ev, data){
    
    ev.preventDefault();
    data = $(data).serialize();
    const res = await fetch(`http://localhost:8090/api/categoria/guardar`, {
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST"
    });
    const jsonData = await res.json();
    return jsonData.data;
}
