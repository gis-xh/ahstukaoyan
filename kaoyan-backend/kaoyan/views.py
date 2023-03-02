# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from kaoyan.models import User
from kaoyan.serializers import UserSerializer


class UserLoginAPIView(APIView):
    def post(self, request, *args, **kwargs):
        # 获取用户提交的数据
        username = request.data.get('username')
        password = request.data.get('password')

        # 查找数据库中是否存在该用户
        try:
            user = User.objects.get(username=username, password=password)
        except User.DoesNotExist:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        # 将用户数据序列化为 JSON 格式并返回
        serializer = UserSerializer(user)
        return Response(serializer.data)
