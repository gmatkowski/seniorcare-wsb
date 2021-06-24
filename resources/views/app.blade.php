<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name')  }}</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
    <script>
        window.app = {
            csrfToken: '{{ csrf_token() }}',
            user: {!! json_encode(\App\Services\UserService::getAuthUserResource(auth()->user())) !!}
        }
    </script>
    <script src="{{ asset('js/app.js') }}" async defer></script>
</body>
</html>
