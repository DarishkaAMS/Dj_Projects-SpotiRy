from django.urls import path

from .views import CreateRoomView, GetRoomView, JoinRoom, LeaveRoom, RoomView, UserInRoom

urlpatterns = [
    path('room', RoomView.as_view()),

    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoomView.as_view()),
    path('join-room', JoinRoom.as_view()),
    path('leave-room', LeaveRoom.as_view()),
    path('user-in-room', UserInRoom.as_view()),
]
