from django.db import models

# Create your models here.
from django.db import models

class Employee(models.Model):
    # عکس پروفایل (اختیاری)
    profile_picture = models.ImageField(upload_to='employee_profiles/', null=True, blank=True)

    # اطلاعات شخصی
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)

    # اطلاعات شغلی
    department = models.CharField(max_length=50)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    hire_date = models.DateField()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
