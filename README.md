# CLI converter Log to JSON or txt
This CLI has command: 
* converter -h
* converter <path_file>
* converter <path_file> -t json
* converter <path_file> -t text
* converter <path_file> -o <path_file>
* converter <path_file> -t json -o <path_file>
* converter <path_file> -t text -o <path_file>
&nbsp;
## RESTful endpoints
### GET /covidnow
> Get a data of Covid in Indonesia in real time
_Request Header_
```
not needed
```
_Request Body_
```
not needed
```
_Response (200)_
```
[
  {
    "name": "Indonesia",
    "positif": "1,505,775",
    "sembuh": "1,342,695",
    "meninggal": "40,754",
    "dirawat": "122,326"
  }
]
```
_Response (400)_
```
{
  "message": "<err.message>"
}
```

