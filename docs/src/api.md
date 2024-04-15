# Katalog api

Znajdują się tutaj osobno w plikach funkcję request do api.
Często występuje odniesienie się do zmiennej globalnej LOCAL_STORAGE z której wyciągany jest token potrzebny do uwierzytelnienia użytkownika.
Można zrobić w tym miejscu refactor, gdyż wiele fragmentów kodu się powtarza.
Wtedy mielibyśmy globalną funkcję get oraz post z parametrami.