//exercicio 5 -> valores postivos 

#include <stdio.h> 

int main() { 

    float valores[6]; 

    int i, contador = 0; 

    float soma = 0, media; 

    for (i = 0; i < 6; i++) { 

        scanf("%f", &valores[i]); 

        if (valores[i] > 0) { 

            contador++; 

            soma += valores[i]; 

        } 

    } 

    printf("%d valores positivos\n", contador); 

    printf("%.1f a media é :,\n", soma / contador); 

    return 0; 

} 