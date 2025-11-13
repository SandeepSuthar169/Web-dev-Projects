//1. User Role
export const UserRoleEnum = {
    ADMIN: "admin",
    ORDER_ADMIN: "order_admin",
    COSTOMER: "costomer",
}

export const AvailableUserRoles = Object.values(UserRoleEnum)

//2. Payment Method
export const paymentMethodEnum = {
    CREDIT_CARD: "credit_card",
    DEBIT_CARD: "debit_card",
    UPI: "upi",
    NET_BANDKING: "net_banking",
    CURRENCY:"currency"
}

export const AvailablepaymentMethod = Object.values(paymentMethodEnum)

//3. Order State
export const OrderStateEnum = {
    PENDING: "pending",
    CONFIRMED: "confirmed",
    PROCESSING: "processing",
    SHIPPED: "shipped",
    DELIVERED: "delivered",
    CANCELLED: "cancelled"
}

export const AvailableOrderState = Object.values(OrderStateEnum)

//4. Order Paymeny status
export const OrderPaymentStatusEnum = {
    PENDING: "pending",
    PAID: "paid",
    PAILED: "failed",
    REFUNDED: "refunded",
}

export const AvailableOrderPaymentStatus = Object.values(OrderPaymentStatusEnum)

//5 Review Rating 
export const ReviewRatingEnum = {
    NOT_DEFINED: 0,
    STAR_1: 1,
    STAR_2: 2,
    STAR_3: 3,
    STAR_4: 4,
    STAR_5: 5,
}

export const AvailableReviewRating = Object.values(ReviewRatingEnum)

//6. Books status
export const BooksStatusEnum = {
    AVAILABLE: "available",
    OUT_OF_STOCK: "out_of_stock",
    PRE_ORDER: "pre_order",
    COMING_SOOM: "coming_soon",
    DISCONTINUED: "discontinued",
}

export const AvaailableBooksStatus = Object.values(BooksStatusEnum)