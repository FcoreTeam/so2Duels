from django.contrib import admin
from .models import Payment


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ['id', 'amount', 'created_at', 'player']
    list_display_links = ['id']
    list_filter = []
    search_fields = ['amount', 'player', 'id']
    list_per_page = 25
    