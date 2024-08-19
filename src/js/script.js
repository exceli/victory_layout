import $ from 'jquery'
import '../styles/style.scss'

$(document).ready(function () {
    $('.custom-checkbox').on('click', function () {
        const $checkbox = $(this).siblings('.checkbox-wrap__input')
        const $parent = $(this).closest('.checkbox-wrap__check')

        $checkbox.prop('checked', !$checkbox.is(':checked'))
        $parent.toggleClass('checked')
    })

    const input = document.querySelector('.calculator-right__input')
    const plusBtn = document.querySelector('.calculator-right__btn.plus')
    const minusBtn = document.querySelector('.calculator-right__btn.minus')

    const step = 1000

    plusBtn.addEventListener('click', function () {
        let currentValue = parseInt(input.value, 10)
        currentValue += step
        input.value = currentValue
    })

    minusBtn.addEventListener('click', function () {
        let currentValue = parseInt(input.value, 10)
        currentValue = Math.max(0, currentValue - step)
        input.value = currentValue
    })
})
