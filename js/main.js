$(document).ready(function() {
    $('#myTable').DataTable( {
        "ajax": "data/fake.json",
        "columns": [
            { "data": "date" },
            { "data": "title" }
        ]
    } );
} );

var chart = c3.generate({
    bindto: "#chart",
    data: {
        x: 'x',
        url: 'data/articles.json',
        mimeType: 'json',
        type: "spline"
    },
    axis: {
        x: {
            type: 'category'
        }
    }
});

var chart2 = c3.generate({
    bindto: "#chart2",
    data: {
        x: 'x',
        url: 'data/mentions.json',
        mimeType: 'json',
        type: 'bar'
    },
    axis: {
        x: {
            type: 'category'
        }
    },
    bar: {
        width: {
            ratio: 0.5 
        }
    },
    color: {
        pattern: ['#FF5555 ', '#5583FF', '#3CBE7F']
    }
});
