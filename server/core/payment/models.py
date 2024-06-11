import uuid
from django.db import models
from users.models import CustomUser

class Payment(models.Model):
    amount = models.PositiveIntegerField(default=0)
    player = models.ForeignKey(CustomUser, on_delete=models.CASCADE, verbose_name='User', related_name='payment_user')
    created_at = models.DateTimeField(auto_now_add=True)
    paid = models.BooleanField(default=False)

    uuid = models.UUIDField(default=uuid.uuid4, editable=True, unique=True)
    
    class Meta:
        db_table = 'payment'
        ordering = ['created_at']
        verbose_name = 'Payment'
        verbose_name_plural = 'Payments'
    
    def __str__(self):
        return str(self.id)