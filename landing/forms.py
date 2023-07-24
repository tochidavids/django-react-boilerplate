from django import forms
from main.models import User

class SignUpForm(forms.ModelForm):
    confirmation = forms.CharField(widget=forms.PasswordInput(), required=True)
    last_name = forms.CharField(required=False)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password']
    
    def clean(self):
        data = super(SignUpForm, self).clean()
        for field in data:
            if not len(data[field].strip()):
                self.add_error('__all__', 'Please fill out every field.')
        if User.objects.filter(email=data.get('email')).exists():
            self.add_error('__all__', 'Email already exists.')
        if User.objects.filter(username=data.get('username')).exists():
            self.add_error('__all__', 'Username already taken.')
        if data.get('password') != data.get('confirmation'):
            self.add_error('__all__', 'Passwords do not match.')
        

