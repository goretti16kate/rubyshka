module api
    module v1
        class ReviewsController<ApplicationController
            def create
                review = Review.new(review_params)
        
                if review.save
                  render json: HouseSerializer.new(review).serialized_json
                else
                  render json: { errors: review.errors.messages }, status: 422
                end
            end
            private
            def review_params
                params.require(:review).permit(:title, :description, :score, :house_id)
        end
    end

end