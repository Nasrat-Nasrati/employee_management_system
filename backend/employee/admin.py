from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Employee

@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'email', 'phone', 'department', 'salary', 'hire_date')
    list_display_links = ('first_name', 'last_name')
    search_fields = ('first_name', 'last_name', 'email', 'phone', 'department')
    list_filter = ('department', 'hire_date')
    ordering = ('-hire_date',)  # جدیدترین‌ها اول
