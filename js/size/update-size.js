
function fetchSize(_id) {
    fetch(`http://127.0.0.1:5000/size/id/${_id}`)
        .then(response => response.json())
        .then(size => {
            $("#_id").val(size._id);
            $("#name").val(size.name);
            $("#price").val(size.price);

        });
}

function loadInformation() {
    let urlParams = new URLSearchParams(window.location.search);
    let _id = urlParams.get('_id');
    fetchSize(_id)
}

function putSize(size) {

    fetch('http://127.0.0.1:5000/size/', {
        method: 'PUT',
        body: JSON.stringify(size),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    })
        .then(res => res.json())
        .then(res => showNotification());


}

/**
 * Get the form and submit it with fetch API
 */
let sizeForm = $("#size-form");
sizeForm.submit(event => {

    let size = getSizeData();
    putSize(size);

    event.preventDefault();
    event.currentTarget.reset();
    window.location.href = '/app/size/sizes.html';
});

/**
 * Gets the size data with JQuery
 */
function getSizeData() {
    return {
        _id: $("input[id='_id']").val(),
        name: $("input[id='name']").val(),
        price: $("input[id='price']").val()
    };
}

/**
 * Shows a notification when the size is accepted
 */
function showNotification() {
    let sizeAlert = $("#size-alert");
    sizeAlert.toggle();
    setTimeout(() => sizeAlert.toggle(), 5000);
}


window.onload = loadInformation;
