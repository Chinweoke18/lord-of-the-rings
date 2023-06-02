export class LordOfRingError extends Error {
    name = "LordOfRingError";
    status = 500;
}

export class RateLimitError extends LordOfRingError {
    name = "RateLimitError";
    status = 429;
}

export class LordRingValidationError extends LordOfRingError {
    name = "LordRingValidationError";
    status = 400;
}

export class LordRingUnauthorizeError extends LordOfRingError {
    name = "LordRingUnauthorizeError";
    status = 401;
}
